let mongoose = require('mongoose')

let emailSchema = mongoose.Schema({
  to: {
    type: String
  },
  subject: {
    type: String
  },
  body: {
    type: String
  },
  schedule: {

    second: {
      type: String
    },
    minute: {
      type: String
    },
    hour: {
      type: String
    },
    dayOfMonth: {
      type: String
    },
    month: {
      type: String
    },
    daysOfWeek: {
      type: String
    },
    year: {
      type: String
    },
    numberOfTimes: {
      type: String
    }, // every 2 hour
    period: {
      type: String
    }, //houry daily weekly
    when: {
      type: String
    },
    type: {
      type: String
    },
    limit: {
      type: String
    },
    scheduled: {
      type: Boolean,
      default: false
    }
  },

})

emailSchema.pre('save', () => console.log('Hello from pre save'));

// let Email = mongoose.model('Email', emailSchema)

module.exports = {
  emailSchema: emailSchema,
}