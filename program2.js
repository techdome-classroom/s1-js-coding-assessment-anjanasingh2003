const decodeTheRing = function (s, p) {
  const match = (sIndex, pIndex) => {
      
      if (sIndex === s.length && pIndex === p.length) return true;

      if (pIndex === p.length) return false;

      // Handle '*' wildcard
      if (p[pIndex] === '*') {
          // Try matching '*' with zero characters (move pattern index)
          if (match(sIndex, pIndex + 1)) return true;

          // Try matching '*' with one or more characters (move string index)
          while (sIndex < s.length) {
              if (match(sIndex + 1, pIndex)) return true; // Match '*' with current character
              sIndex++;
          }
          return false; // No match found
      }

      // Handle '?' wildcard or direct match
      if (sIndex < s.length && (p[pIndex] === '?' || p[pIndex] === s[sIndex])) {
          return match(sIndex + 1, pIndex + 1);
      }

      // If we reach here, it means there was no match
      return false;
  };

  return match(0, 0);
};

module.exports = decodeTheRing;