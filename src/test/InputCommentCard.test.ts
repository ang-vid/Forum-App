import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import InputCommentCard from '../components/InputCommentCard.tsx'

describe('InputCommentCard', () => {
  it('renders the textarea and SEND button', () => {
    render(React.createElement(InputCommentCard, { addComment: vi.fn() }))
    expect(screen.getByPlaceholderText('Write your post...')).toBeInTheDocument()
    expect(screen.getByText('SEND')).toBeInTheDocument()
  })
  it('SEND is disabled when input is empty',() => {
    render(React.createElement(InputCommentCard, { addComment: vi.fn() }))
    expect(screen.getByText('SEND')).toBeDisabled()
  })
    it('SEND is disabled when text exceeds 1000 chars',() => {

    

})
/*
    Renders textarea and SEND button
    SEND is disabled when input is empty
    SEND is disabled when text exceeds 1000 chars
    Typing and pressing Enter submits
    Clicking SEND submits
    Textarea clears after submit
    Clear button works
 */
