export default {
  getImage () {
    return {
      id: 'afcfde3b-3346-4365-b363-b75fcbdc818a',
      publicId: '5lKEuVcDGOptFTNQbSb45s',
      userId: 'photogramtest',
      liked: false,
      likes: 0,
      src: 'http://photogram.test/5lKEuVcDGOptFTNQbSb45s.jpg',
      description: '#Awesome',
      tags: [ ' awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: 'ef7e748a-de9f-467a-8fd4-1c49ea9078ea',
      name: 'Eduardo Ham',
      username: 'EHam',
      email: 'e@photogram.test',
      password: 'eham123',
      createdAt: new Date().toString()
    }
  }
}
