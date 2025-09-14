const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: UserRole!
    sponsoredMeasures(type: MeasureType, isPrimary: Boolean): [Measure!]!
  }

  enum UserRole {
    LEGISLATOR
    STAFF
    CITIZEN
  }

  type Sponsor {
    id: ID!
    user: User!
    measure: Measure!
    isPrimary: Boolean!
    dateSponsored: String!
  }

  type Measure {
    id: ID!
    title: String!
    description: String
    type: MeasureType!
    chamber: MeasureChamber!
    number: Int!
    name: String!
    status: MeasureStatus!
    introducedDate: String!
    lastActionDate: String
    sponsors: [Sponsor!]!
    amendments: [Amendment!]!
    sections: [MeasureSection!]!
  }

  enum MeasureType {
    BILL
    RESOLUTION
  }

  enum MeasureChamber {
    HOUSE
    SENATE
  }

  enum MeasureStatus {
    INTRODUCED
    IN_COMMITTEE
    PASSED_COMMITTEE
    ON_FLOOR
    PASSED_HOUSE
    PASSED_SENATE
    SIGNED
    VETOED
    FAILED
  }

  type Amendment {
    id: ID!
    title: String!
    description: String
    measure: Measure!
    proposedBy: User!
    proposedDate: String!
    status: AmendmentStatus!
    content: String!
  }

  enum AmendmentStatus {
    PROPOSED
    ACCEPTED
    REJECTED
    WITHDRAWN
  }

  type MeasureSection {
    id: ID!
    measure: Measure!
    sectionNumber: Int!
    title: String!
    content: String!
    order: Int!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    measures: [Measure!]!
    measure(id: ID!): Measure
    measuresByStatus(status: MeasureStatus!): [Measure!]!
    measuresByType(type: MeasureType!): [Measure!]!
    measuresByUser(userId: ID!, type: MeasureType): [Measure!]!
    measuresByName(name: String!): [Measure!]!
    amendments: [Amendment!]!
    amendment(id: ID!): Amendment
    amendmentsByUser(userId: ID!, status: AmendmentStatus): [Amendment!]!
    sponsors: [Sponsor!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, role: UserRole!): User!
    createMeasure(title: String!, description: String, type: MeasureType!, chamber: MeasureChamber!, number: Int!, introducedDate: String!): Measure!
    addSponsor(measureId: ID!, userId: ID!, isPrimary: Boolean!): Sponsor!
    createAmendment(measureId: ID!, title: String!, description: String, content: String!, proposedBy: ID!): Amendment!
    addMeasureSection(measureId: ID!, sectionNumber: Int!, title: String!, content: String!): MeasureSection!
  }
`;

module.exports = typeDefs;