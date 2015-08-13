import tornado.ioloop
import tornado.web
import os
import tornado.websocket
import car

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("public/index.html")
        #self.write("hello")
    def post(self):
        self.write("You wrote ")

class WebSocketHandler(tornado.websocket.WebSocketHandler):
        def open(self):
            pass
                 
        def on_message(self, message):
            self.write_message(message)
            car.run_command(message)

        def on_close(self):
            pass


settings = {
        "static_path": os.path.join(os.path.dirname(__file__), "static"),
        "debug":True,
        }

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/websocket",WebSocketHandler),
    (r"/(apple-touch-icon\.png)", tornado.web.StaticFileHandler,
        dict(path=settings['static_path'])),
    ],**settings)

if __name__ == "__main__":
    application.listen(8888)
    tornado.ioloop.IOLoop.instance().start()
