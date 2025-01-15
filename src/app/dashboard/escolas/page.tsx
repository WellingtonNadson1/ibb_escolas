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
const escolas = [
  { id: 1, nome: "Escola Municipal João da Silva" },
  { id: 2, nome: "Escola Estadual Maria Santos" },
  { id: 3, nome: "Colégio Particular Futuro Brilhante" },
]

export default function EscolasPage() {
  const handleEdit = (id: number) => {
    console.log(`Editar escola com ID ${id}`)
    // Implementar lógica de edição
  }

  const handleDelete = (id: number) => {
    console.log(`Deletar escola com ID ${id}`)
    // Implementar lógica de deleção
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Escolas</h1>
      <Button className="mb-4">Cadastrar Nova Escola</Button>
      <Card>
        <CardHeader>
          <CardTitle>Lista de Escolas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Nome da Escola</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {escolas.map((escola) => (
                <TableRow key={escola.id}>
                  <TableCell className="font-medium">{escola.id}</TableCell>
                  <TableCell>{escola.nome}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(escola.id)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(escola.id)}>
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
