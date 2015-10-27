import codecs
import time

class Chars(): 
	def __init__(self, str): 
		self.str = str
		self.length = len(str)
		self.pos = 0

	def run(self):
		while(self.pos < self.length):
			char = self.str[self.pos]
			self.pos = self.pos + 1

f = codecs.open('page.html', encoding='utf-8')

content = f.read()

start = time.time()
instance = Chars(content)
instance.run()
end = time.time();

print instance.length, (end - start)