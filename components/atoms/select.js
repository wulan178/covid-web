import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

export default function Select({ value, onChange, options }) {
    return (
        <Listbox value={value} onChange={onChange} as="div" className="mx-auto text-center relative my-7">
            <Listbox.Button className="select-button">
                <span className="text-left text-sm">{value}</span>
                <Image src="/icons/unfold.png" width={20} height={20} alt="chevron" />
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                <Listbox.Options className="select-options">
                    {options.map((item) => (
                        <Listbox.Option key={item} value={item} className="select-option">
                            {({ selected }) => (
                                <span className={selected ? "font-medium" : "font-normal"}>
                                    {item}
                                    {selected && <Image src="/icons/checked.png" width={20} height={20} alt="check" />}
                                </span>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Transition>
        </Listbox>
    );
}
