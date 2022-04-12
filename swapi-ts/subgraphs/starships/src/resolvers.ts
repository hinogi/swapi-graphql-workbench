// Documentation on resolving entities:
//  https://www.apollographql.com/docs/federation/entities/#resolving
export const resolvers = {
	Starship: {
		__resolveReference(parent, args) {
			return { ...parent }
		}
	},
}