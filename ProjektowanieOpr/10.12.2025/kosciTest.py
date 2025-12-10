import unittest
from kosci import calc_score

class TestowanieKosci(unittest.TestCase):
    def poprawnosc(self):
        self.assertTrue(calc_score([1,2,3,4,5,6])==0)

if __name__ == '__main__':
    unittest.main()