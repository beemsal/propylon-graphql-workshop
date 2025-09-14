const { users, measures, sponsors, amendments, measureSections } = require('./data');

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id),
    measures: () => measures,
    measure: (_, { id }) => measures.find(measure => measure.id === id),
    measuresByStatus: (_, { status }) => measures.filter(measure => measure.status === status),
    measuresByType: (_, { type }) => measures.filter(measure => measure.type === type),
    measuresByUser: (_, { userId, type }) => {
      const userSponsors = sponsors.filter(sponsor => sponsor.userId === userId);
      const userMeasures = userSponsors.map(sponsor => measures.find(measure => measure.id === sponsor.measureId));
      return type ? userMeasures.filter(measure => measure.type === type) : userMeasures;
    },
    amendments: () => amendments,
    amendment: (_, { id }) => amendments.find(amendment => amendment.id === id),
    amendmentsByUser: (_, { userId, status }) => {
      const userAmendments = amendments.filter(amendment => amendment.proposedById === userId);
      return status ? userAmendments.filter(amendment => amendment.status === status) : userAmendments;
    },
    sponsors: () => sponsors
  },

  User: {
    sponsoredMeasures: (user) => {
      const userSponsors = sponsors.filter(sponsor => sponsor.userId === user.id);
      return userSponsors.map(sponsor => measures.find(measure => measure.id === sponsor.measureId));
    },
    sponsoredMeasuresByType: (user, { type }) => {
      const userSponsors = sponsors.filter(sponsor => sponsor.userId === user.id);
      const userMeasures = userSponsors.map(sponsor => measures.find(measure => measure.id === sponsor.measureId));
      return userMeasures.filter(measure => measure.type === type);
    }
  },

  Measure: {
    sponsors: (measure) => sponsors.filter(sponsor => sponsor.measureId === measure.id),
    amendments: (measure) => amendments.filter(amendment => amendment.measureId === measure.id),
    sections: (measure) => measureSections.filter(section => section.measureId === measure.id).sort((a, b) => a.order - b.order),
    name: (measure) => {
      const typePrefix = measure.type === 'BILL' ? (measure.chamber === 'HOUSE' ? 'HB' : 'SB') : (measure.chamber === 'HOUSE' ? 'HR' : 'SR');
      return `${typePrefix}${measure.number}`;
    }
  },

  Sponsor: {
    user: (sponsor) => users.find(user => user.id === sponsor.userId),
    measure: (sponsor) => measures.find(measure => measure.id === sponsor.measureId)
  },

  Amendment: {
    measure: (amendment) => measures.find(measure => measure.id === amendment.measureId),
    proposedBy: (amendment) => users.find(user => user.id === amendment.proposedById)
  },

  MeasureSection: {
    measure: (section) => measures.find(measure => measure.id === section.measureId)
  },

  Mutation: {
    createUser: (_, { name, email, role }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        email,
        role
      };
      users.push(newUser);
      return newUser;
    },

    createMeasure: (_, { title, description, type, chamber, number, introducedDate }) => {
      const newMeasure = {
        id: String(measures.length + 1),
        title,
        description,
        type,
        chamber,
        number,
        status: 'INTRODUCED',
        introducedDate,
        lastActionDate: null
      };
      measures.push(newMeasure);
      return newMeasure;
    },

    addSponsor: (_, { measureId, userId, isPrimary }) => {
      const newSponsor = {
        id: String(sponsors.length + 1),
        userId,
        measureId,
        isPrimary,
        dateSponsored: new Date().toISOString().split('T')[0]
      };
      sponsors.push(newSponsor);
      return newSponsor;
    },

    createAmendment: (_, { measureId, title, description, content, proposedBy }) => {
      const newAmendment = {
        id: String(amendments.length + 1),
        title,
        description,
        measureId,
        proposedById: proposedBy,
        proposedDate: new Date().toISOString().split('T')[0],
        status: 'PROPOSED',
        content
      };
      amendments.push(newAmendment);
      return newAmendment;
    },

    addMeasureSection: (_, { measureId, sectionNumber, title, content }) => {
      const newSection = {
        id: String(measureSections.length + 1),
        measureId,
        sectionNumber,
        title,
        content,
        order: measureSections.filter(s => s.measureId === measureId).length + 1
      };
      measureSections.push(newSection);
      return newSection;
    }
  }
};

module.exports = resolvers;