'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface DeleteUrlModalProps {
  isOpen: boolean
  onClose: () => void
  url: { id: number; shortUrl: string }
  onDelete: (id: number) => void
}

export function DeleteUrlModal({ isOpen, onClose, url, onDelete }: DeleteUrlModalProps) {
  const handleDelete = () => {
    onDelete(url.id)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar eliminación</DialogTitle>
        </DialogHeader>
        <p>¿Estás seguro de que quieres eliminar la URL corta: {url.shortUrl}?</p>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button variant="destructive" onClick={handleDelete}>Eliminar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
