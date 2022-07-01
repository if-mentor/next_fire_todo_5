import React from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'

const confirmDialogType = {
  delete: '削除',
  restore: 'リストア'
} as const

export type ConfirmDialogType = typeof confirmDialogType

type ConfirmDialogProps = {
  dialog: keyof ConfirmDialogType | null
  setOpen: React.Dispatch<React.SetStateAction<keyof ConfirmDialogType | null>>
  onClickOK: () => void
}

const useDialog = () => {
  const ConfirmDialog = (props: ConfirmDialogProps) => {
    const { dialog, setOpen, onClickOK } = props

    const handleClose = () => {
      setOpen(null)
    }

    return (
      <>
        <Dialog open={dialog !== null}>
          <DialogTitle>
            <Typography>確認ダイアログ</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              アイテムを全て{dialog !== null && confirmDialogType[dialog]}しますか？
            </DialogContentText>
            <DialogActions>
              <Button variant="contained" onClick={onClickOK}>
                OK
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return { ConfirmDialog }
}

export default useDialog
