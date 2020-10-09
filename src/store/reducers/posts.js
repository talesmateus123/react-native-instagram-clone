import { acc } from 'react-native-reanimated'
import { ADD_POST } from '../actions/actionTypes'

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: 'Rafael Pereira Filho',
            email: 'rafael.filho@email.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'Joana Elena Silva',
                    comment: 'Excelente foto'
                },
                {
                    nickname: 'Rafael Gustavo Pereira',
                    comment: 'Muito ruim! Faço melhor...'
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Joana da Silva',
            email: 'joana.silva@email.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: [
                {
                    nickname: 'Rafael Pereira Filho',
                    comment: 'Excelente foto'
                },
                {
                    nickname: 'Rafael Gustavo Pereira',
                    comment: 'Muito ruim! Faço melhor...'
                }
            ]
        },
        {
            id: Math.random(),
            nickname: 'Joana da Silva',
            email: 'joana.silva@email.com',
            image: require('../../../assets/imgs/fence.jpg'),
            comments: []
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        default:
            return state
    }
}

export default reducer
