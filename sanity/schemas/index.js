
import {createSchema} from 'sanity'
// import schemaTypes from "all:part:@sanity/base/schema-type"

import pageInfo from './pageInfo'
import client from './client'
import experience from './experience'
import project from './project'
import social from './social'

export const schemaTypes = [pageInfo, experience, client, project, social]

export default createSchema({
    name: 'default',

    types: schemaTypes.concat({
        pageInfo,
        experience,
        client,
        project,
        social
    }),
}) 