'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pencil, Trash2 } from 'lucide-react'

// Dados de exemplo
const turmas = [
  { id: 1, nome: "1º Ano A - Manhã" },
  { id: 2, nome: "2º Ano B - Tarde" },
  { id: 3, nome: "3º Ano C - Noite" },
]

export default function TurmasPage() {
  const handleEdit = (id: number) => {
    console.log(`Editar turma com ID ${id}`)
    // Implementar lógica de edição
  }

  const handleDelete = (id: number) => {
    console.log(`Deletar turma com ID ${id}`)
    // Implementar lógica de deleção
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Turmas</h1>
      <Button className="mb-4">Cadastrar Nova Turma</Button>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Turmas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Nome da Turma</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {turmas.map((turma) => (
                <TableRow key={turma.id}>
                  <TableCell className="font-medium">{turma.id}</TableCell>
                  <TableCell>{turma.nome}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(turma.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(turma.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

