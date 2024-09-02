"use server"
import { YouTubeSearchResponse } from "$/types/types";
import axios from "axios"

const apiKey = "AIzaSyAJs9bXXuDZc3176XmtD-l3_7TDXIhD_7U"
const yt = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        key: apiKey,
        maxResults: 1,
        type: 'video'
    }
});
 

// Function to fetch YouTube videos based on a query
async function fetchYouTubeVideos(query: string) {
  try {
    const response = await yt.get<YouTubeSearchResponse>('/search', {
        params: {
          q: query
        }
      });

    // Check if the response contains data
    if (response.data) {
      return response.data;
    } else {
      throw new Error("No videos found for the query.");
    }
  } catch (error) {
    console.error("YouTube API error:", error);
    throw new Error("Failed to fetch YouTube videos");
  }
}


export {fetchYouTubeVideos as yt}