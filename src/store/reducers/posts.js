import { acc } from 'react-native-reanimated'
import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

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
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(action.payload.comment)
                        }
                        else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post
                })
            }
        default:
            return state
    }
}

export default reducer
