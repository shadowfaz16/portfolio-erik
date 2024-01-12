interface SanityBody {
    _createdAd: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image",
    asset: {
        _ref: string;
        _type: "reference"
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInfo: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    mainImage: Image;
    profilePic: Image;
}

export interface Client extends SanityBody {
    _type: 'client';
    image: Image;
    title: string;
    website: string;
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    image: Image;
    linkToProject: string;
    summary: string;
    // clients: Client[];
}

export interface Experience extends SanityBody {
    _type: 'experience';
    company: string;
    companyImage: string;
    stack: StaticImageData[];
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];

}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}