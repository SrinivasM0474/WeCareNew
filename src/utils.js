

const FormData = {
    options: [
        {
            value: 0,
            displayValue: "None",
        },
        {
            value: 10,
            displayValue: "Jr.",
        },
        {
            value: 20,
            displayValue: "Sr.",
        },
        {
            value: 30,
            displayValue: "II",
        },
        {
            value: 40,
            displayValue: "III",
        },
        {
            value: 50,
            displayValue: "IV",
        },
    ],
    gender: ['Male', 'Female', 'Other'],
    primaryPhoneNumber: ['Mobile', 'Home', 'Work'],
    yesNoOptions: ['Yes', 'No'],
    emailPhoneMailOptions: ['Email', 'Phone', 'Mail'],
    maritalStatus: [
        {
            value: 1,
            displayValue: 'Divorced'
        },
        {
            value: 2,
            displayValue: 'Married'
        },
        {
            value: 3,
            displayValue: 'Separated'
        },
        {
            value: 4,
            displayValue: 'Widowed'
        },
        {
            value: 5,
            displayValue: 'Domestic Partner'
        },
        {
            value: 6,
            displayValue: 'Single/Never Married'
        },
        {
            value: 6,
            displayValue: 'None'
        }
    ],
    citizenshipStatus: [
        {
            value: 1,
            displayValue: 'U.S. Citizen'
        },
        {
            value: 2,
            displayValue: 'Permanent Resident'
        },
        {
            value: 3,
            displayValue: 'Refugee/Asylee'
        }
    ],
    highestLevelEducation: [
        {
            value: 1,
            displayValue: 'Adv. Degree-Masters/PHD/JD/MD'
        },
        {
            value: 2,
            displayValue: 'Certificate of Attendance'
        },
        {
            value: 3,
            displayValue: 'College Grad-Bachelors Degree'
        },
        {
            value: 4,
            displayValue: 'Grade 1'
        },
        {
            value: 5,
            displayValue: 'Grade 2'
        },
        {
            value: 6,
            displayValue: 'Grade 3'
        },
        {
            value: 7,
            displayValue: 'Grade 4'
        },
        {
            value: 8,
            displayValue: 'Grade 5'
        },
        {
            value: 9,
            displayValue: 'Grade 6'
        },
        {
            value: 10,
            displayValue: 'Grade 7'
        },
        {
            value: 11,
            displayValue: 'Grade 8'
        },
        {
            value: 12,
            displayValue: 'Grade 9'
        },
        {
            value: 13,
            displayValue: 'Grade 10'
        },
        {
            value: 14,
            displayValue: 'Grade 10'
        },
        {
            value: 15,
            displayValue: 'Grade 11'
        },
        {
            value: 16,
            displayValue: 'Grade 12'
        },
        {
            value: 17,
            displayValue: 'High School Diploma/GED'
        },
        {
            value: 18,
            displayValue: 'Kindergarten'
        },
        {
            value: 19,
            displayValue: 'Less Than High School'
        },
        {
            value: 20,
            displayValue: 'None'
        },
        {
            value: 21,
            displayValue: 'Pre-School/Pre-K'
        }
    ],
    whatIsYourRace: [
        {
            value: 1,
            displayValue: 'Other Race'
        },
        {
            value: 2,
            displayValue: 'Caucasian/White'
        },
        {
            value: 3,
            displayValue: 'Unknown'
        },
        {
            value: 4,
            displayValue: 'Asian'
        },
        {
            value: 5,
            displayValue: 'Black or African American'
        },
        {
            value: 6,
            displayValue: 'American Indian/Alaska Native'
        },
        {
            value: 7,
            displayValue: 'Native Hawaiian/Pac. Islander'
        }
    ],
    stepperNames: [
        "Benefits",
        "Head of Household",
        "Members",
        "Absent Parent",
        "Child Care Provider",
        "Authorized Representative",
        "Income",
        "Expenses",
        "Assets",
        "Upload",
        "Summary",
        "Agreement",
        "Submit",
    ],
    militaryVeteranStatus: [
        {
            value: 1,
            displayValue: 'Active Military – self'
        },
        {
            value: 2,
            displayValue: 'Active Military – spouse'
        },
        {
            value: 3,
            displayValue: 'Veteran – self'
        },
        {
            value: 4,
            displayValue: 'Veteran – spouse'
        },
        {
            value: 5,
            displayValue: 'None'
        },
        {
            value: 6,
            displayValue: 'Child w/Military Benefits'
        },
        {
            value: 7,
            displayValue: 'Reserve'
        }
    ],
    preferredLanguage: [
        {
            value: 1,
            displayValue: 'English'
        },
        {
            value: 2,
            displayValue: 'Spanish'
        },
        {
            value: 3,
            displayValue: 'Amharic'
        },
        {
            value: 4,
            displayValue: 'Arabic'
        },
        {
            value: 5,
            displayValue: 'Chinese - Mandarin'
        }
    ],
    kindOfAccommodations: [
        {
            value: 1,
            displayValue: 'Assist w/ completing app/forms'
        },
        {
            value: 2,
            displayValue: 'Assistive listening device'
        },
        {
            value: 3,
            displayValue: 'Information in Braille'
        },
        {
            value: 4,
            displayValue: 'Information in large print'
        },
        {
            value: 5,
            displayValue: 'Scheduled appt. (Metro Access)'
        },
        {
            value: 6,
            displayValue: 'Sign Language interpreter(ASL)'
        }
    ],
    relationShip: [
        {
            value: 1,
            displayValue: 'Brother-In-Law'
        },
        {
            value: 2,
            displayValue: 'Child'
        },
        {
            value: 3,
            displayValue: 'Child-Unrelated'
        },
        {
            value: 4,
            displayValue: 'Cousin'
        },
        {
            value: 5,
            displayValue: 'Daughter-in-law'
        },
        {
            value: 6,
            displayValue: 'Father'
        },
        {
            value: 7,
            displayValue: 'Father-In-Law'
        },
        {
            value: 8,
            displayValue: 'Grandchild'
        },
        {
            value: 9,
            displayValue: 'Grandfather'
        },
        {
            value: 10,
            displayValue: 'Grandmother'
        },
        {
            value: 11,
            displayValue: 'Legal Guardian'
        },
        {
            value: 12,
            displayValue: 'Mother'
        },
        {
            value: 13,
            displayValue: 'Mother-In-Law'
        },
        {
            value: 14,
            displayValue: 'Non - Relative Housemate'
        },
        {
            value: 15,
            displayValue: 'Non - Relative Landlord'
        },
        {
            value: 16,
            displayValue: 'Non - Relative Tenant'
        },
        {
            value: 17,
            displayValue: 'Other'
        },
        {
            value: 18,
            displayValue: 'Other Parent'
        },
        {
            value: 19,
            displayValue: 'Partner'
        },
        {
            value: 20,
            displayValue: 'Relative'
        },
        {
            value: 21,
            displayValue: 'Relative Child'
        },
        {
            value: 22,
            displayValue: 'Relative Housemate'
        },
        {
            value: 23,
            displayValue: 'Relative Landlord'
        },
        {
            value: 24,
            displayValue: 'Relative Tenant'
        },
        {
            value: 25,
            displayValue: 'Sibling'
        },
        {
            value: 26,
            displayValue: 'Sister-In-Law'
        },
        {
            value: 27,
            displayValue: 'Son-In-Law'
        },
        {
            value: 28,
            displayValue: 'Spouse'
        }
    ],
    mask: [/[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
}

export default FormData