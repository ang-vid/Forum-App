import { describe, it, expect } from 'vitest'
import {
  getYoutubeVideoId,
  getTiktokVideoId,
  getInstagramPostId,
  getSegmentType,
  mapToSegments,
} from '../components/LinkifyText..tsx'

describe('getYoutubeVideoId', () => {
  it('extracts id from watch?v= url', () => {
    expect(getYoutubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ')
  })

  it('extracts id from youtu.be short url', () => {
    expect(getYoutubeVideoId('https://youtu.be/dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ')
  })

  it('ignores extra params like &t=', () => {
    expect(getYoutubeVideoId('https://www.youtube.com/watch?v=jNQXAC9IVRw&t=12s')).toBe('jNQXAC9IVRw')
  })
})

describe('getTiktokVideoId', () => {
  it('extracts id from standard tiktok url', () => {
    expect(getTiktokVideoId('https://www.tiktok.com/@scout2015/video/6718335390845095173')).toBe('6718335390845095173')
  })

  it('ignores extra params like ?lang=en', () => {
    expect(getTiktokVideoId('https://www.tiktok.com/@nba/video/7295454326111915306?lang=en')).toBe('7295454326111915306')
  })

})

describe('getInstagramPostId', () => {
  it('extracts id from /p/ url', () => {
    expect(getInstagramPostId('https://www.instagram.com/p/CuE2WNQs6vH/')).toBe('CuE2WNQs6vH')
  })

  it('extracts id from /reel/ url', () => {
    expect(getInstagramPostId('https://www.instagram.com/reel/C5q0QK8O8Yw/')).toBe('C5q0QK8O8Yw')
  })

  it('extracts id from /reels/ url', () => {
    expect(getInstagramPostId('https://www.instagram.com/reels/CuE2WNQs6vH/')).toBe('CuE2WNQs6vH')
  })

  it('extracts id from /tv/ url', () => {
    expect(getInstagramPostId('https://www.instagram.com/tv/CXx1234abcD/')).toBe('CXx1234abcD')
  })
})

describe('getSegmentType', () => {
  it('detects youtube.com', () => {
    expect(getSegmentType('https://www.youtube.com/watch?v=abc')).toBe('youtube')
  })

  it('detects youtu.be', () => {
    expect(getSegmentType('https://youtu.be/abc')).toBe('youtube')
  })

  it('detects tiktok', () => {
    expect(getSegmentType('https://www.tiktok.com/@user/video/123')).toBe('tiktok')
  })

  it('detects instagram', () => {
    expect(getSegmentType('https://www.instagram.com/p/abc/')).toBe('instagram')
  })

  it('detects a plain https link', () => {
    expect(getSegmentType('https://example.com')).toBe('link')
  })

  it('detects a plain http link', () => {
    expect(getSegmentType('http://example.com')).toBe('link')
  })

  it('returns text for a regular word', () => {
    expect(getSegmentType('hello')).toBe('text')
  })
})

describe('mapToSegments', () => {
  it('splits text into word segments', () => {
    const segments = mapToSegments('hello world')
    expect(segments).toHaveLength(2)
    expect(segments[0]).toEqual({ type: 'text', content: 'hello' })
    expect(segments[1]).toEqual({ type: 'text', content: 'world' })
  })

  it('correctly types a url within text', () => {
    const segments = mapToSegments('check https://example.com out')
    expect(segments[1].type).toBe('link')
    expect(segments[1].content).toBe('https://example.com')
  })

  it('correctly types a youtube url within text', () => {
    const segments = mapToSegments('watch https://youtu.be/abc now')
    expect(segments[1].type).toBe('youtube')
  })
})