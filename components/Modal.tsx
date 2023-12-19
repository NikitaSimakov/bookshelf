"use client";
import Link from "next/link";
import style from "./modal.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface IModal {
  children: React.ReactNode;
  params: {
    id: string;
    category: string;
  };
}

const Modal = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("modal");
  const path = usePathname();
  console.log(path);
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  useEffect(() => {
    if (id) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [id]);

  const dialog: JSX.Element | null = id ? (
    <div className={style.overlay}>
      <dialog ref={dialogRef} className={style.modal}>
        <button>
          <Link href={path} scroll={false}>
            x
          </Link>
        </button>
        <h1>This is modal window {id}</h1>
      </dialog>
    </div>
  ) : null;

  return dialog;
};

export default Modal;
