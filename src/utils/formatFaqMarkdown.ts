// 轻量级安全的 FAQ Markdown 转 HTML 格式化工具（专为白底高亮主题定制）
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatInline(text: string): string {
  let out = escapeHtml(text);
  // 将常见 LaTeX 公式片段转换为清晰可读的纯文本/符号
  out = out.replace(/\$\\rightarrow\$/g, '→');
  out = out.replace(/\$\$[\s\S]*?\\text\{([^}]+)\}[\s\S]*?\$\$/g, (_, m) => m);
  // 行内代码
  out = out.replace(/`([^`]+)`/g, '<code class="bg-slate-100 text-sky-700 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-200">$1</code>');
  // 粗体
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900 font-semibold">$1</strong>');
  return out;
}

export function formatFaqMarkdown(raw: string): string {
  // 先标准化残留公式
  const normalized = raw
    .replace(/\$\$\\text\{实际扣除账户流量\}\s*=\s*\\text\{您实际消耗的数据量\}\s*\\times\s*\\text\{该节点的倍率\}\$\$/g, '**公式：`实际扣除账户流量 = 您实际消耗的数据量 × 该节点的倍率`**')
    .replace(/text\{实际扣除账户流量\}\s*=\s*text\{您实际消耗的数据量\}\s*times\s*text\{该节点的倍率\}/g, '**公式：`实际扣除账户流量 = 您实际消耗的数据量 × 该节点的倍率`**')
    .replace(/\$\\rightarrow\$/g, '→')
    .replace(/rightarrow/g, '→');

  const lines = normalized.split('\n');
  const htmlParts: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let inUl = false;
  let inOl = false;

  const closeLists = () => {
    if (inUl) {
      htmlParts.push('</ul>');
      inUl = false;
    }
    if (inOl) {
      htmlParts.push('</ol>');
      inOl = false;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      closeLists();
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLines = [];
      } else {
        inCodeBlock = false;
        htmlParts.push(
          `<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto text-xs font-mono my-3 leading-relaxed"><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`
        );
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (!trimmed) {
      closeLists();
      continue;
    }

    if (trimmed.startsWith('### ')) {
      closeLists();
      htmlParts.push(`<h4 class="text-base sm:text-lg font-bold text-slate-900 mt-5 mb-2">${formatInline(trimmed.slice(4))}</h4>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      closeLists();
      htmlParts.push(`<h3 class="text-lg sm:text-xl font-bold text-sky-700 mt-5 mb-2">${formatInline(trimmed.slice(3))}</h3>`);
      continue;
    }

    const ulMatch = trimmed.match(/^-\s+(.*)$/);
    if (ulMatch) {
      if (inOl) {
        htmlParts.push('</ol>');
        inOl = false;
      }
      if (!inUl) {
        htmlParts.push('<ul class="list-disc pl-5 space-y-1.5 my-2 text-slate-600">');
        inUl = true;
      }
      htmlParts.push(`<li>${formatInline(ulMatch[1])}</li>`);
      continue;
    }

    const olMatch = trimmed.match(/^\d+\.\s+(.*)$/);
    if (olMatch) {
      if (inUl) {
        htmlParts.push('</ul>');
        inUl = false;
      }
      if (!inOl) {
        htmlParts.push('<ol class="list-decimal pl-5 space-y-1.5 my-2 text-slate-600">');
        inOl = true;
      }
      htmlParts.push(`<li>${formatInline(olMatch[1])}</li>`);
      continue;
    }

    closeLists();
    htmlParts.push(`<p class="my-2 text-slate-600 leading-relaxed">${formatInline(trimmed)}</p>`);
  }

  closeLists();
  return htmlParts.join('\n');
}
