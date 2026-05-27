import { renderHook, act } from '@testing-library/react'
import { useComments } from "../helpers/useComments"
import { beforeEach, describe, expect, it } from 'vitest'

describe('useComments', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('starts with empty comments when localStorage is empty', () => {
    const { result } = renderHook(() => useComments())
    expect(result.current.comments).toEqual([])
  })

  it('loads comments from localStorage on init', () => {
    const saved = [{ text: 'hello', createdAt: '2024-01-01T00:00:00.000Z' }]
    localStorage.setItem('PostedComments', JSON.stringify(saved))

    const { result } = renderHook(() => useComments())
    expect(result.current.comments).toEqual(saved)
  })

  it('adds a comment to the top of the list', () => {
    const { result } = renderHook(() => useComments())

    act(() => {
      result.current.addComment('my post')
    })

    expect(result.current.comments[0].text).toBe('my post')
  })

  it('gets rid of whitespace when adding a comment', () => {
    const { result } = renderHook(() => useComments())

    act(() => {
      result.current.addComment('  hello  ')
    })

    expect(result.current.comments[0].text).toBe('hello')
  })

  it('does not add a blank comment', () => {
    const { result } = renderHook(() => useComments())

    act(() => {
      result.current.addComment('   ')
    })

    expect(result.current.comments).toHaveLength(0)
  })

  it('deletes the correct comment by id', () => {
    const { result } = renderHook(() => useComments())

    act(() => {
      result.current.addComment('first')
      result.current.addComment('second')
    })


    act(() => {
      result.current.deleteComment(1)
    })

    expect(result.current.comments).toHaveLength(1)
    expect(result.current.comments[0].text).toBe('first')
  })
})