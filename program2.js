const decodeTheRing = function (s, p) {
  const match = (sIndex, pIndex) => {
      
      if (sIndex === s.length && pIndex === p.length) return true;

      if (pIndex === p.length) return false;

      if (p[pIndex] === '*') {
         
          if (match(sIndex, pIndex + 1)) return true;

          while (sIndex < s.length) {
              if (match(sIndex + 1, pIndex)) return true; 
              sIndex++;
          }
          return false; 
      }

      if (sIndex < s.length && (p[pIndex] === '?' || p[pIndex] === s[sIndex])) {
          return match(sIndex + 1, pIndex + 1);
      }

   
      return false;
  };

  return match(0, 0);
};

module.exports = decodeTheRing;