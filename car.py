command = 0

def run_command(command):
    if command == "0":
        move_left()
    elif command == "1":
        move_back()
    elif command == "2":
        move_right()
    elif command == "3":
        move_forward()

def move_forward():
    print "I'm moving forward!"

def move_back():
    print "I'm moving back!"

def move_left():
    print "I'm moving left!"

def move_right():
    print "I'm moving right!"
