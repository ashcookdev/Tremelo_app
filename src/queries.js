/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      ArtistName
      Genre
      Role
      ProfilePic
      Bio
      Location
      Terms
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ArtistName
        Genre
        Role
        ProfilePic
        Bio
        Location
        Terms
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
