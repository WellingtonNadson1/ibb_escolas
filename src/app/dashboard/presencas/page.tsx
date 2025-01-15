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
const presencas = [
  { id: 1, nome: "Aula de Matemática - 1º Ano A - 01/05/2023" },
  { id: 2, nome: "Aula de Português - 2º Ano B - 02/05/2023" },
  { id: 3, nome: "Aula de Ciências - 3º Ano C - 03/05/2023" },
]

export default function PresencasPage() {
  const handleEdit = (id: number) => {
    console.log(`Editar registro de presença com ID ${id}`)
    // Implementar lógica de edição
  }

  const handleDelete = (id: number) => {
    console.log(`Deletar registro de presença com ID ${id}`)
    // Implementar lógica de deleção
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Registro de Presenças</h1>
      <Button className="mb-4">Registrar Novas Presenças</Button>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Registros de Presença</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {presencas.map((presenca) => (
                <TableRow key={presenca.id}>
                  <TableCell className="font-medium">{presenca.id}</TableCell>
                  <TableCell>{presenca.nome}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(presenca.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(presenca.id)}>
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

