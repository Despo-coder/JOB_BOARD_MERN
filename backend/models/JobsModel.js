import mongoose from "mongoose";

// 18762887975

const JobSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    jobTitle: { 
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobSummary: {  
        type: String,
        required: true
    },
    payPackage: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    fullTime: {
        type: Boolean,
        required: true
    },  
    remote_work: {
        type: Boolean,
        required: true
    },
    detailedInfo: { 
            type: String,
            required: true
        },
        offeringCompany: { 
            type: String,
            required: true
        },
        offeringCompanyWebsite: { 
            type: String,
            required: false
        },
        socialMedia: {
            twitter: { 
                type: String,
                required: false
            },
            linkedIn: { 
                type: String,
                required: false
            }
        },
        companyLogo: { 
            type: String,
            required: false
        },
        prerequisites: {  
            type: [String], // Array of strings for the job prerequisites
            default: [],   // Default to an empty array
        }

},
{timestamps: true}

);

const JobModel = mongoose.model('Job', JobSchema);

export default JobModel;