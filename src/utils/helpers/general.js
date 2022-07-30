export const groupContacts = (contacts) => {
   const map = contacts.reduce((p, c) => {
      const char = c.name.charAt(0).toUpperCase()
      // eslint-disable-next-line no-param-reassign
      p[char] = [].concat(p[char] || [], c)
      return p
   }, {})

   return Object.keys(map).map((k) => ({
      letter: k,
      names: map[k],
   }))
}
