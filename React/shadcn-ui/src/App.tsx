import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Search, PlusCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from './components/ui/dialog'
import { DialogClose, DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { Label } from '@radix-ui/react-label'

function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="text-4xl font-bold">Products</h1>

      <div className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="Order ID" />
          <Input name="id" placeholder="Product Name" />
          <Input name="id" placeholder="Price" />
          <Button type="submit" variant="link">
            <Search className='w-4 h-4 mr-2' />
            Filter results
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className='w-4 h-4 mr-2' />
              New Product
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Product</DialogTitle>
              <DialogDescription>Create new product</DialogDescription>
            </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center">
                  <Label htmlFor="name">Produto</Label>
                  <Input className="col-span-3" id="name" />
              </div>
              
              <div className="grid grid-cols-4 items-center">
                  <Label htmlFor="price">Price</Label>
                  <Input className="col-span-3" id="price" />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        
      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>1</TableCell>
                <TableCell>Product {i}</TableCell>
                <TableCell>12.09</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App