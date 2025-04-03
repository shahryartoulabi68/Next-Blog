"use client";
import useMoveBack from "@/Hooks/useMoveBack";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NotFound() {
    const moveBack = useMoveBack();
    return (
        <div className="h-screen">
            <div className="container xl:max-w-screen-xl">
                <div className="flex justify-center pt-10">
                    <div>
                        <h1 className="text-xl font-bold text-secondary-700 mb-8">
                            هیچ صفحه ای با این مشخصات یافت نشد
                        </h1>
                        <Link href="/blogs">
                        برگشت به صفحه پست ها
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default NotFound;
