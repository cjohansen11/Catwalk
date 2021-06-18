import React from 'react';
import QuestionsAndAnswers from '../QuestionsAndAnswers.jsx';
import { fireEvent, render, screen } from '@testing-library/react';
import GET from '../../../../../lib/related.js';

let listOfQuestions = {
  'product_id': '19590',
  'results': [
    {
      'question_id': 128569,
      'question_body': 'Ea quas et deleniti nihil quidem qui ratione excepturi.',
      'question_date': '2020-12-20T00:00:00.000Z',
      'asker_name': 'Dillan_Schaefer90',
      'question_helpfulness': 34,
      'reported': false,
      'answers': {
        '1215979': {
          'id': 1215979,
          'body': 'Odio molestiae et omnis eaque ut pariatur natus.',
          'date': '2020-09-11T00:00:00.000Z',
          'answerer_name': 'Daniela54',
          'helpfulness': 12,
          'photos': []
        },
        '1215980': {
          'id': 1215980,
          'body': 'Possimus nostrum ea dolores expedita non nostrum laborum.',
          'date': '2020-04-24T00:00:00.000Z',
          'answerer_name': 'Nellie12',
          'helpfulness': 2,
          'photos': [
            'https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
            'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80'
          ]
        },
        '1215981': {
          'id': 1215981,
          'body': 'Qui porro ipsum explicabo.',
          'date': '2020-05-30T00:00:00.000Z',
          'answerer_name': 'Hiram_Krajcik71',
          'helpfulness': 7,
          'photos': [
            'https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80',
            'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        }
      }
    },
    {
      'question_id': 128568,
      'question_body': 'Nemo in laudantium qui sunt expedita consequatur.',
      'question_date': '2020-10-31T00:00:00.000Z',
      'asker_name': 'Zelma32',
      'question_helpfulness': 32,
      'reported': false,
      'answers': {
        '1215964': {
          'id': 1215964,
          'body': 'Et non est totam consequatur error qui.',
          'date': '2020-12-14T00:00:00.000Z',
          'answerer_name': 'Dolores74',
          'helpfulness': 13,
          'photos': [
            'https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80',
            'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80'
          ]
        },
        '1215965': {
          'id': 1215965,
          'body': 'Aperiam et ipsa ratione eaque quia.',
          'date': '2020-11-19T00:00:00.000Z',
          'answerer_name': 'Hector23',
          'helpfulness': 11,
          'photos': []
        },
        '1215966': {
          'id': 1215966,
          'body': 'Et illo in unde atque et.',
          'date': '2020-11-20T00:00:00.000Z',
          'answerer_name': 'Lilla49',
          'helpfulness': 2,
          'photos': []
        },
        '1215967': {
          'id': 1215967,
          'body': 'Vitae qui illum corporis voluptatem corrupti dicta.',
          'date': '2020-11-14T00:00:00.000Z',
          'answerer_name': 'Fermin34',
          'helpfulness': 10,
          'photos': [
            'https://images.unsplash.com/photo-1472186422470-1f3fbde547aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1647&q=80'
          ]
        },
        '1215968': {
          'id': 1215968,
          'body': 'Animi est similique rerum corporis.',
          'date': '2020-04-07T00:00:00.000Z',
          'answerer_name': 'Devonte.Hegmann16',
          'helpfulness': 18,
          'photos': [
            'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215969': {
          'id': 1215969,
          'body': 'Voluptatem consequatur necessitatibus et itaque ut omnis eveniet numquam.',
          'date': '2020-05-22T00:00:00.000Z',
          'answerer_name': 'Margarita_Schmitt12',
          'helpfulness': 13,
          'photos': []
        },
        '1215970': {
          'id': 1215970,
          'body': 'Omnis reiciendis et aliquam atque eaque dolor non quae minus.',
          'date': '2020-12-25T00:00:00.000Z',
          'answerer_name': 'Sean.Corwin',
          'helpfulness': 8,
          'photos': []
        },
        '1215971': {
          'id': 1215971,
          'body': 'Minima corporis eaque.',
          'date': '2020-12-10T00:00:00.000Z',
          'answerer_name': 'Zetta.Lockman50',
          'helpfulness': 3,
          'photos': [
            'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
            'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215972': {
          'id': 1215972,
          'body': 'Ad optio accusamus voluptatem fuga voluptatem aliquid.',
          'date': '2020-09-14T00:00:00.000Z',
          'answerer_name': 'Leanna28',
          'helpfulness': 19,
          'photos': []
        },
        '1215973': {
          'id': 1215973,
          'body': 'Quo soluta iusto facilis sunt voluptas alias aut.',
          'date': '2020-12-26T00:00:00.000Z',
          'answerer_name': 'Theron.Quigley',
          'helpfulness': 13,
          'photos': []
        },
        '1215974': {
          'id': 1215974,
          'body': 'Voluptatem laudantium itaque qui ipsum.',
          'date': '2020-02-26T00:00:00.000Z',
          'answerer_name': 'Nestor.Metz20',
          'helpfulness': 5,
          'photos': []
        },
        '1215975': {
          'id': 1215975,
          'body': 'Dolorem enim consectetur consequatur officia est.',
          'date': '2020-10-31T00:00:00.000Z',
          'answerer_name': 'Alexis.Haley',
          'helpfulness': 18,
          'photos': []
        },
        '1215976': {
          'id': 1215976,
          'body': 'Quam eligendi omnis quo.',
          'date': '2020-03-04T00:00:00.000Z',
          'answerer_name': 'Maddison56',
          'helpfulness': 3,
          'photos': [
            'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
          ]
        },
        '1215977': {
          'id': 1215977,
          'body': 'Exercitationem necessitatibus numquam itaque ex.',
          'date': '2020-10-28T00:00:00.000Z',
          'answerer_name': 'Abbigail52',
          'helpfulness': 3,
          'photos': []
        },
        '1215978': {
          'id': 1215978,
          'body': 'Qui omnis labore ad corporis ipsa soluta soluta sit eligendi.',
          'date': '2021-01-11T00:00:00.000Z',
          'answerer_name': 'Kassandra29',
          'helpfulness': 0,
          'photos': []
        },
        '1991952': {
          'id': 1991952,
          'body': 'asdfsaf',
          'date': '2021-06-17T00:00:00.000Z',
          'answerer_name': 'asdfsad',
          'helpfulness': 0,
          'photos': []
        }
      }
    },
    {
      'question_id': 128570,
      'question_body': 'Ut velit et dicta voluptatibus.',
      'question_date': '2020-09-17T00:00:00.000Z',
      'asker_name': 'Ellen66',
      'question_helpfulness': 22,
      'reported': false,
      'answers': {
        '1215982': {
          'id': 1215982,
          'body': 'Officiis placeat maiores quisquam eius eos et quia.',
          'date': '2020-03-20T00:00:00.000Z',
          'answerer_name': 'Elijah65',
          'helpfulness': 17,
          'photos': []
        },
        '1215983': {
          'id': 1215983,
          'body': 'Numquam nam sit quis.',
          'date': '2020-04-11T00:00:00.000Z',
          'answerer_name': 'Patrick.Kshlerin15',
          'helpfulness': 12,
          'photos': [
            'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        }
      }
    },
    {
      'question_id': 128571,
      'question_body': 'Blanditiis rerum quae sunt odit omnis dicta exercitationem et sapiente.',
      'question_date': '2021-01-01T00:00:00.000Z',
      'asker_name': 'Keven_Larkin',
      'question_helpfulness': 19,
      'reported': false,
      'answers': {
        '1215984': {
          'id': 1215984,
          'body': 'Eum neque minus iste excepturi aut.',
          'date': '2020-08-06T00:00:00.000Z',
          'answerer_name': 'Sydnee_Senger',
          'helpfulness': 11,
          'photos': [
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
          ]
        },
        '1215985': {
          'id': 1215985,
          'body': 'Dolorum quo eum cum exercitationem nihil eaque totam assumenda ea.',
          'date': '2021-02-06T00:00:00.000Z',
          'answerer_name': 'Brandyn_Davis38',
          'helpfulness': 1,
          'photos': []
        },
        '1215986': {
          'id': 1215986,
          'body': 'Sunt non debitis dicta repellat voluptatibus praesentium qui eaque perspiciatis.',
          'date': '2021-02-13T00:00:00.000Z',
          'answerer_name': 'Irwin69',
          'helpfulness': 14,
          'photos': []
        },
        '1215987': {
          'id': 1215987,
          'body': 'Voluptas odio amet exercitationem voluptatem illum in.',
          'date': '2020-12-03T00:00:00.000Z',
          'answerer_name': 'Cecelia.Ankunding',
          'helpfulness': 14,
          'photos': []
        },
        '1215988': {
          'id': 1215988,
          'body': 'Ducimus quis ipsum dolores sed sed ut tempora dolores.',
          'date': '2020-04-19T00:00:00.000Z',
          'answerer_name': 'Carroll_Zulauf',
          'helpfulness': 13,
          'photos': []
        },
        '1215990': {
          'id': 1215990,
          'body': 'Laboriosam et esse aut.',
          'date': '2020-03-25T00:00:00.000Z',
          'answerer_name': 'Lavada_Breitenberg29',
          'helpfulness': 15,
          'photos': [
            'https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215991': {
          'id': 1215991,
          'body': 'Debitis dolore perspiciatis totam incidunt nemo.',
          'date': '2020-03-06T00:00:00.000Z',
          'answerer_name': 'Martina26',
          'helpfulness': 17,
          'photos': [
            'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215992': {
          'id': 1215992,
          'body': 'Repudiandae molestiae nulla.',
          'date': '2020-10-03T00:00:00.000Z',
          'answerer_name': 'Jacklyn.Gibson17',
          'helpfulness': 15,
          'photos': [
            'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
          ]
        },
        '1215993': {
          'id': 1215993,
          'body': 'Architecto deserunt nulla fugiat tempore maiores.',
          'date': '2020-10-18T00:00:00.000Z',
          'answerer_name': 'Ariel.Wunsch19',
          'helpfulness': 15,
          'photos': [
            'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80'
          ]
        },
        '1215994': {
          'id': 1215994,
          'body': 'Corporis earum consequuntur quia excepturi ullam quaerat dignissimos qui rerum.',
          'date': '2020-11-06T00:00:00.000Z',
          'answerer_name': 'Leonard.OKeefe75',
          'helpfulness': 17,
          'photos': []
        },
        '1215995': {
          'id': 1215995,
          'body': 'Id ad itaque molestiae accusantium labore ea ducimus fugiat.',
          'date': '2020-02-29T00:00:00.000Z',
          'answerer_name': 'Michelle93',
          'helpfulness': 17,
          'photos': []
        },
        '1215996': {
          'id': 1215996,
          'body': 'Rerum explicabo ut impedit.',
          'date': '2020-09-03T00:00:00.000Z',
          'answerer_name': 'Howard_Daniel34',
          'helpfulness': 3,
          'photos': [
            'https://images.unsplash.com/photo-1511766566737-1740d1da79be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215997': {
          'id': 1215997,
          'body': 'Qui rerum nihil voluptatem.',
          'date': '2020-08-01T00:00:00.000Z',
          'answerer_name': 'Mohammed77',
          'helpfulness': 12,
          'photos': [
            'https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
            'https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215998': {
          'id': 1215998,
          'body': 'Vel velit a doloribus perspiciatis quia.',
          'date': '2020-07-03T00:00:00.000Z',
          'answerer_name': 'Vicky32',
          'helpfulness': 3,
          'photos': [
            'https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          ]
        },
        '1215999': {
          'id': 1215999,
          'body': 'Ut sequi est.',
          'date': '2020-04-09T00:00:00.000Z',
          'answerer_name': 'Jedediah_DAmore16',
          'helpfulness': 12,
          'photos': [
            'https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
          ]
        }
      }
    },
    {
      'question_id': 128566,
      'question_body': 'Exercitationem voluptas consequatur rem quia sint quam neque tenetur qui.',
      'question_date': '2020-08-22T00:00:00.000Z',
      'asker_name': 'Beryl.Hilll',
      'question_helpfulness': 18,
      'reported': false,
      'answers': {
        '1215934': {
          'id': 1215934,
          'body': 'Qui est doloribus fuga sed est.',
          'date': '2020-04-26T00:00:00.000Z',
          'answerer_name': 'Erica_Maggio63',
          'helpfulness': 3,
          'photos': []
        },
        '1215935': {
          'id': 1215935,
          'body': 'Ducimus quia unde unde magni minus vitae sint necessitatibus voluptate.',
          'date': '2020-07-18T00:00:00.000Z',
          'answerer_name': 'Ardella.Waelchi97',
          'helpfulness': 16,
          'photos': [
            'https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80',
            'https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215936': {
          'id': 1215936,
          'body': 'Nulla sint rerum reiciendis suscipit dolor omnis qui quasi distinctio.',
          'date': '2020-04-30T00:00:00.000Z',
          'answerer_name': 'Hertha.Hirthe90',
          'helpfulness': 16,
          'photos': []
        },
        '1215937': {
          'id': 1215937,
          'body': 'Ut neque laborum sed quod ipsam aspernatur.',
          'date': '2020-04-10T00:00:00.000Z',
          'answerer_name': 'Vance.Rogahn36',
          'helpfulness': 14,
          'photos': []
        },
        '1215938': {
          'id': 1215938,
          'body': 'Accusamus repellat repellat illum.',
          'date': '2020-09-26T00:00:00.000Z',
          'answerer_name': 'Hugh_McDermott',
          'helpfulness': 16,
          'photos': []
        },
        '1215939': {
          'id': 1215939,
          'body': 'Delectus nihil ut.',
          'date': '2020-06-17T00:00:00.000Z',
          'answerer_name': 'Devonte55',
          'helpfulness': 19,
          'photos': [
            'https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80'
          ]
        },
        '1215940': {
          'id': 1215940,
          'body': 'Perspiciatis eligendi sunt distinctio quasi expedita alias ducimus.',
          'date': '2020-10-21T00:00:00.000Z',
          'answerer_name': 'Kayli85',
          'helpfulness': 1,
          'photos': []
        },
        '1215941': {
          'id': 1215941,
          'body': 'Est vel velit ipsam architecto dolorem.',
          'date': '2020-06-28T00:00:00.000Z',
          'answerer_name': 'Kelvin_Schmeler',
          'helpfulness': 12,
          'photos': []
        },
        '1215942': {
          'id': 1215942,
          'body': 'Aliquam commodi sed maxime voluptatibus.',
          'date': '2020-12-15T00:00:00.000Z',
          'answerer_name': 'Dolores.Kuhn21',
          'helpfulness': 5,
          'photos': []
        },
        '1215944': {
          'id': 1215944,
          'body': 'Alias vel neque incidunt.',
          'date': '2020-08-22T00:00:00.000Z',
          'answerer_name': 'Adalberto.Doyle',
          'helpfulness': 18,
          'photos': [
            'https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215945': {
          'id': 1215945,
          'body': 'Dolor non non doloribus occaecati dicta repellat ut quidem.',
          'date': '2020-08-27T00:00:00.000Z',
          'answerer_name': 'Jamar.Gleason',
          'helpfulness': 3,
          'photos': [
            'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
          ]
        },
        '1215946': {
          'id': 1215946,
          'body': 'Beatae facilis porro repudiandae dolorum molestiae quaerat dolor autem.',
          'date': '2020-09-13T00:00:00.000Z',
          'answerer_name': 'Darius84',
          'helpfulness': 2,
          'photos': [
            'https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80'
          ]
        },
        '1215947': {
          'id': 1215947,
          'body': 'Asperiores unde repellendus laudantium harum quia aut aut rerum.',
          'date': '2020-04-02T00:00:00.000Z',
          'answerer_name': 'Wilfrid.Conn86',
          'helpfulness': 8,
          'photos': [
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
          ]
        },
        '1215948': {
          'id': 1215948,
          'body': 'Aut et quia unde a ut eveniet nulla aut.',
          'date': '2020-12-19T00:00:00.000Z',
          'answerer_name': 'Alford_Labadie93',
          'helpfulness': 18,
          'photos': []
        },
        '1215949': {
          'id': 1215949,
          'body': 'Nam libero porro adipisci eos necessitatibus voluptatibus optio maiores.',
          'date': '2020-02-27T00:00:00.000Z',
          'answerer_name': 'Beryl.Beatty42',
          'helpfulness': 2,
          'photos': [
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
          ]
        },
        '1215950': {
          'id': 1215950,
          'body': 'Molestiae optio sapiente unde odit.',
          'date': '2020-03-06T00:00:00.000Z',
          'answerer_name': 'Miracle.Zemlak',
          'helpfulness': 18,
          'photos': []
        },
        '1215951': {
          'id': 1215951,
          'body': 'Fugiat doloremque quasi doloribus aut et.',
          'date': '2020-04-18T00:00:00.000Z',
          'answerer_name': 'Rae.Jacobs',
          'helpfulness': 1,
          'photos': []
        },
        '1215952': {
          'id': 1215952,
          'body': 'Hic quis eveniet.',
          'date': '2021-02-17T00:00:00.000Z',
          'answerer_name': 'Earline18',
          'helpfulness': 15,
          'photos': [
            'https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80'
          ]
        }
      }
    }
  ]
};
let featuredProduct = {
  'id': 19590,
  'campus': 'hr-rfe',
  'name': 'Terrence Jacket',
  'slogan': 'Quia quo et nihil sunt qui aut veritatis aut.',
  'description': 'Aut est ut quibusdam reprehenderit illum. Inventore reprehenderit autem velit enim magnam eveniet. Sed labore sit delectus eum cupiditate nisi eum commodi expedita. Natus molestiae accusamus vero corporis blanditiis non. Quis rerum aliquid corrupti rerum tenetur praesentium. Qui nulla voluptatum quis alias omnis.',
  'category': 'Jacket',
  'default_price': '660.00',
  'created_at': '2021-02-23T19:24:34.674Z',
  'updated_at': '2021-02-23T19:24:34.674Z',
  'features': [
    {
      'feature': 'Fabric',
      'value': '"FullControlSkin"'
    }
  ]
};

listOfAnswers = [
  {
      "answer_id": 1215979,
      "body": "Odio molestiae et omnis eaque ut pariatur natus.",
      "date": "2020-09-11T00:00:00.000Z",
      "answerer_name": "Daniela54",
      "helpfulness": 12,
      "photos": []
  },
  {
      "answer_id": 1215981,
      "body": "Qui porro ipsum explicabo.",
      "date": "2020-05-30T00:00:00.000Z",
      "answerer_name": "Hiram_Krajcik71",
      "helpfulness": 7,
      "photos": [
          {
              "id": 1055506,
              "url": "https://images.unsplash.com/photo-1516199707327-5399434d0aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1083&q=80"
          },
          {
              "id": 1055507,
              "url": "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
      ]
  },
  {
      "answer_id": 1215980,
      "body": "Possimus nostrum ea dolores expedita non nostrum laborum.",
      "date": "2020-04-24T00:00:00.000Z",
      "answerer_name": "Nellie12",
      "helpfulness": 2,
      "photos": [
          {
              "id": 1055504,
              "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
          },
          {
              "id": 1055505,
              "url": "https://images.unsplash.com/photo-1515110371136-7e393289662c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
          }
      ]
  }
]

// it('should display title for Questions And Answers', () => {
//   render(<QuestionsAndAnswers featuredProduct={GET.featuredProduct(19583)} ></QuestionsAndAnswers>);
//   expect(screen.queryByText('Questions & Answers')).toBeTruthy();
// });

it('should show the question and answers', async () => {
  render(<Questions
    listOfQuestions={listOfQuestions}
    featuredProduct={featuredProduct}
    listOfAnswers={listOfAnswers}
  />);
  await screen.getByText(/Ea quas et deleniti nihil quidem qui ratione excepturi/i);
});

// it('should show the question and answers', async () => {
//   render(<Questions
//     listOfQuestions={listOfQuestions}
//     featuredProduct={featuredProduct}
//     listOfAnswers={listOfAnswers}
//   />);
//   await screen.getByText(/Odio molestiae et omnis eaque ut pariatur natus/i);
// });