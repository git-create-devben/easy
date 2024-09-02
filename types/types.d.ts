// Define the type for YouTube video ID
export interface YouTubeVideoId {
    kind: string;
    videoId: string;
  }
  
  // Define the type for YouTube thumbnails
  export interface YouTubeThumbnail {
    url: string;
    width: number;
    height: number;
  }
  
  // Define the type for YouTube snippet
  export interface YouTubeSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: YouTubeThumbnail;
      medium: YouTubeThumbnail;
      high: YouTubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  }
  
  // Define the type for YouTube search result item
  export interface YouTubeSearchResult {
    kind: string;
    etag: string;
    id: YouTubeVideoId;
    snippet: YouTubeSnippet;
  }
  
  // Define the type for YouTube API search response
  export interface YouTubeSearchResponse {
    kind: string;
    etag: string;
    nextPageToken?: string;
    regionCode: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: YouTubeSearchResult[];
  }
  
  // Define the type for your entire API response (including the top-level array structure)
  export type ApiResponse = ["$@1", [string, null]] | { [key: string]: any };
  
  type ChatProps = {
    handleSubmit: FormEventHandler<HTMLFormElement>,
    setInput: Dispatch<SetStateAction<string>>,
    input: string,
    setMessages: Dispatch<SetStateAction<string>>,
    messages: Message[]
  }
  interface Message {
    type: 'user' | 'ai';
    content: string ;
    sending?:bolean
  }

  interface WindowType{
    window: Window & typeof globalThis
  }