'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const SheetContext = React.createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({
  asChild,
  children,
  ...props
}: {
  asChild?: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const { setOpen } = React.useContext(SheetContext);
  void asChild;
  return (
    <div onClick={() => setOpen(true)} className="inline-block cursor-pointer" {...props}>
      {children}
    </div>
  );
}

export function SheetContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open, setOpen } = React.useContext(SheetContext);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[50000] flex">
      <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div
        className={cn(
          'bg-background relative ml-auto h-full w-full max-w-sm p-6 shadow-lg transition-transform',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function SheetClose({
  asChild,
  children,
  ...props
}: {
  asChild?: boolean;
  children: React.ReactNode;
  [key: string]: unknown;
}) {
  const { setOpen } = React.useContext(SheetContext);
  void asChild;
  return (
    <div onClick={() => setOpen(false)} className="inline-block cursor-pointer" {...props}>
      {children}
    </div>
  );
}
