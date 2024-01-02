"use client";
import Link from "next/link";
import style from "./modal.module.scss";
import { usePathname, useSearchParams } from "next/navigation";
import CardInfo from "./CardInfo";

interface IModal {
  children: React.ReactNode;
  params: {
    id: string;
    category: string;
  };
}

const Modal = () =>
  // { children }: { children: React.ReactNode }
  {
    const searchParams = useSearchParams();
    const id = searchParams!.get("modal");
    const path = usePathname()!;
    const dialog: JSX.Element | null = id ? (
      <div className={style.overlay}>
        <dialog className={style.modal}>
          <button>
            <Link
              href={path !== "/books/all" ? path : "/books"}
              replace
              scroll={false}
            >
              x
            </Link>
          </button>
          <CardInfo />
        </dialog>
      </div>
    ) : null;

    return dialog;
  };

export default Modal;
