export const groupContacts = (contacts) => {
	const map = contacts.reduce((p, c) => {
		let char = c.name.charAt(0).toUpperCase()
		p[char] = [].concat(p[char] || [], c)
		return p
	}, {})

	return Object.keys(map).map((k) => ({
		letter: k,
		names: map[k],
	}))
}
