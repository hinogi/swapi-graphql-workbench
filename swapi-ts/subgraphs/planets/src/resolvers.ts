// Documentation on resolving entities:
//  https://www.apollographql.com/docs/federation/entities/#resolving
export const resolvers = {
	Planet: {
		__resolveReference(parent, args) {
			return { ...parent }
		}
	},
}