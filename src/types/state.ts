export type State = {
  stories: Stories
  story: Story
}

export type Stories = {
  items: number[]
  isFetching: boolean
  error: string
}

export type Story = {
  data: {
    [x: string]: any
  }
  isFetching: boolean
  error: string
}
