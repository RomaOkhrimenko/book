import collectionOne from '../../assets/image/collection/blood.png'
import collectionTwo from '../../assets/image/collection/final.png'
import collectionThree from '../../assets/image/collection/for-vampire.png'
import collectionFour from '../../assets/image/collection/for-magic.png'



interface Collection {
    id: number
    image: any
    title: string
    books: number
    time: string
    genres: object
}

export const collections: Array<Collection> = [
{id: 1, image: collectionOne, title: 'Книги От которых кровЬ стынет в жилах', books: 9, time: '18:21:15', genres: {genre1: 'Детективы', genre2: 'Фэнтези', genre3: 'Триллеры'}},
{id: 2, image: collectionTwo, title: 'Самый непредсказуемый финал!', books: 12, time: '18:21:15', genres: {genre1: 'Приключения', genre2: 'Романы', genre3: 'Ужасы'}},
{id: 3, image: collectionThree, title: 'Жажда крови: лучшие книги о вампирах', books: 8, time: '18:21:15', genres: {genre1: 'Фантастика', genre2: 'Фэнтези', genre3: 'Триллеры'}},
{id: 4, image: collectionFour, title: 'От “Властелина колец“ До “Гарри поттера“ — Топ лучших книг про магию', books: 20, time: '18:21:15', genres: {genre1: 'Фантастика', genre2: 'Фэнтези',}},
{id: 5, image: collectionTwo, title: 'почувствуй себя в шкуре маньяка!', books: 9, time: '18:21:15', genres: {genre1: 'Детективы', genre2: 'Фэнтези', genre3: 'Триллеры'}},
]