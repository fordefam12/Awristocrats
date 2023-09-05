import { gql } from '@apollo/client';

export const QUERY_WATCHES = gql`
  query GetWatches($brandName: String, $gender: String) {
    watches(brandName: $brandName, gender: $gender) {
    _id
    referenceNumber
    watchName
    gender
    watchDescription
    brandName
    brandLogo
    caliberImage
    imageURL
    price
    }
  }
`

export const QUERY_SINGLE_WATCH = gql`
  query GetWatch ($watchId: ID!) {
    watch(_id: $watchId) {
      _id
    referenceNumber
    watchName
    gender
    watchDescription
    brandName
    brandLogo
    caliberImage
    imageURL
    price
    }
  }
`