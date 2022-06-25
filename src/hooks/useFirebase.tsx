import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'

const DOCPATH = 'todos'

const useFirebase = () => {
  // 削除データ処理
  const deleteData = async (deleteTodoId: Array<string>): Promise<void> => {
    ;(deleteTodoId as Array<string>).forEach(async (id) => {
      await deleteDoc(doc(db, DOCPATH, id))
    })
  }

  // リストアデータ処理
  const restoreData = async (restoreTodoId: Array<string>): Promise<void> => {
    ;(restoreTodoId as Array<string>).forEach(async (id) => {
      await updateDoc(doc(db, DOCPATH, id), {
        isDraft: false
      })
    })
  }

  return { deleteData, restoreData }
}

export default useFirebase
