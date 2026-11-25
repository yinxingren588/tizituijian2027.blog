import http.server
import socketserver
import os
import sys

PORT = 4321
DIRECTORY = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'dist'))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Clean URL support: if path doesn't exist, check path + .html or path/index.html
        translated = self.translate_path(self.path)
        if not os.path.exists(translated):
            if os.path.exists(translated + '.html'):
                self.path = self.path + '.html'
            elif os.path.exists(os.path.join(translated, 'index.html')):
                if not self.path.endswith('/'):
                    self.path += '/'
            elif os.path.exists(os.path.join(DIRECTORY, '404.html')):
                self.path = '/404.html'
        return super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PORT), CustomHandler) as httpd:
        print(f"Python Static Server running at http://127.0.0.1:{PORT}/ serving {DIRECTORY}", flush=True)
        try:
            httpd.serve_forever()
        except Exception as e:
            print(f"Server error: {e}", file=sys.stderr, flush=True)
