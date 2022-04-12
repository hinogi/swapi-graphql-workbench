// Documentation on resolving entities:
//  https://www.apollographql.com/docs/federation/entities/#resolving
export const resolvers = {
	Person: {
		__resolveReference(parent, args) {
			return { ...parent }
		}
	},
}