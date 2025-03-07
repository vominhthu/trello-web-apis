/* eslint-disable no-useless-catch */
import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'
import { slugify } from '~/utils/formatters'


const createNew = async ({ title, description }) => {
  try {
    const slug = slugify(title)
    return {
      title,
      description,
      slug
    }
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}
