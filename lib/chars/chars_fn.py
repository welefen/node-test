import codecs
import time


def chars(content):
	length = len(content)
	pos = 0
	while(pos < length):
		char = content[pos]
		pos = pos + 1

f = codecs.open('page.html', encoding='utf-8')

content = f.read()

start = time.time()
chars(content)

#chars(content)

end = time.time();

print end - start