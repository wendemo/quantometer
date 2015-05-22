import socket
import time

host = '121.42.10.210'
port = 3000

def packHttp(data):
    head='POST /input HTTP/1.1\r\nHost: ' + host
    if(port != 80):
        head += ":" + str(port);
    
    head += '\r\nConnection: keep-alive\r\nContent-Type: application/json; charset=UTF-8\r\nContent-Length: ' + str(len(data)) + '\r\n\r\n' + data;
    
    return head;
    
def unpackHttp(data):
    res = data.split('\r\n');
    status_code = res[0].split(' ')[1];
    print "Status Code:" + status_code + "\r\n"

if __name__ == '__main__':
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((host, port))
    sock.send(packHttp('{ "pid":1, "result":0.1, "unit":1, "institutions":1, "check_name":"11", "case_no":1, "create_date": "", "device_id":1 }'))
    recv_data = sock.recv(1024)
    unpackHttp(recv_data)
    sock.close()