'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EditUrlModalProps {
  isOpen: boolean
  onClose: () => void
  url: { id: number; shortUrl: string; originalUrl: string }
  onSave: (id: number, newShortUrl: string, newOriginalUrl: string) => void
}

export function EditUrlModal({ isOpen, onClose, url, onSave }: EditUrlModalProps) {
  const [shortUrl, setShortUrl] = useState(url.shortUrl)
  const [originalUrl, setOriginalUrl] = useState(url.originalUrl)

  const handleSave = () => {
    onSave(url.id, shortUrl, originalUrl)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar URL</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="shortUrl" className="text-right">
              URL Corta
            </Label>
            <Input
              id="shortUrl"
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="originalUrl" className="text-right">
              URL Original
            </Label>
            <Input
              id="originalUrl"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Guardar cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
