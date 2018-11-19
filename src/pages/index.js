import React from 'react'

import Layout from '../components/layout'
import Film from '../components/film'

let filmList = [
  {
    title: 'A Walk To Remember 2',
    duration: '148',
    description: `Years after her passing, Mandy's long lost little sister is now the same age as Mandy when she was married. Struggling with the pressures of social norms paired with a rocky relationship, Lily is in a persistent state of mixed emotions. Life is short, but how avoid making wrong, hasty decisions. What is wrong anyways? More importantly, what's right?`,
    triggers: {
      category: 'Depression',
      time: '140',
      details:
        'Lily calls off the wedding...or...insert depression related trigger here',
    },
    imageSource: 'https://source.unsplash.com/ZkrueVypQZU/1600x900',
  },
  {
    title: 'Stars and Guitars',
    duration: '122',
    description:
      'Phasellus porta vulputate massa, sed dapibus ante dapibus a. Praesent vestibulum neque velit, eget placerat quam sagittis vitae. Pellentesque vitae metus id nulla finibus efficitur mollis sit amet leo. Aenean vel diam urna. Suspendisse sed est nec lacus tristique consectetur at quis lacus. Aenean egestas nibh sed scelerisque accumsan. Suspendisse congue enim id turpis vehicula volutpat. Praesent sollicitudin diam sapien. Cras eu sodales tortor. Nunc sit amet urna tortor. Sed porta felis sit amet arcu tempor, sit amet ultrices elit bibendum. ',
    triggers: {
      category: 'Sexual Assault',
      time: '12',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae commodo neque. Curabitur euismod velit et laoreet condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    imageSource: 'https://source.unsplash.com/IiwYeihxC58/1600x900',
  },
  {
    title: 'Frosted',
    duration: '212',
    description:
      'Phasellus porta vulputate massa, sed dapibus ante dapibus a. Praesent vestibulum neque velit, eget placerat quam sagittis vitae. Pellentesque vitae metus id nulla finibus efficitur mollis sit amet leo. Aenean vel diam urna. Suspendisse sed est nec lacus tristique consectetur at quis lacus. Aenean egestas nibh sed scelerisque accumsan. Suspendisse congue enim id turpis vehicula volutpat. Praesent sollicitudin diam sapien. Cras eu sodales tortor. Nunc sit amet urna tortor. Sed porta felis sit amet arcu tempor, sit amet ultrices elit bibendum. ',
    triggers: {
      category: 'Addiction',
      time: '34',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae commodo neque. Curabitur euismod velit et laoreet condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    imageSource: 'https://source.unsplash.com/ZC0EbdLC8G0/1600x900',
  },
]

const IndexPage = () => (
  <Layout>
    {filmList.map((film, index) => {
      return (
        <Film
          key={index}
          title={film.title}
          duration={film.duration}
          description={film.description}
          triggers={film.triggers}
          imageSource={film.imageSource}
        />
      )
    })}
  </Layout>
)

export default IndexPage
