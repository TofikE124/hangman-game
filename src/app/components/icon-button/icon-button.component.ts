import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Before is used to diaply the shadow
// After is used to display 25% white on the button when hovered

const buttonStyles = cva(
  [
    'rounded-full',
    'overflow-hidden',
    'grid',
    'place-items-center',
    'relative',
    `after:content-[' ']`,
    'after:absolute',
    'after:inset-0',
    'after:bg-white/0',
    'hover:after:bg-white/25',
    `before:conetnt-[' ']`,
    'before:absolute',
    'before:rounded-full',
    'before:inset-0',
    'before:z-[1]',
  ],
  {
    variants: {
      color: {
        pink: ['text-white', 'bg-button-pink'],
      },
      size: {
        sm: [
          'lg:size-[90px]',
          'lg:p-6',
          'md:size-16',
          'md:p-4',
          'sm:size-10',
          'sm:p-2',
          'before:shadow-icon-pink-sm',
        ],
        lg: ['size-[200px]', 'before:shadow-icon-pink-lg'],
      },
    },
    defaultVariants: {
      color: 'pink',
      size: 'sm',
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

@Component({
  selector: 'icon-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input('iconSrc') iconSrc!: string;
  @Input('color') color: ButtonVariants['color'];
  @Input('size') size: ButtonVariants['size'];
  @Input('className') className: string = '';

  get buttonClasses(): string {
    return twMerge(
      buttonStyles({ color: this.color, size: this.size }),
      this.className
    );
  }
}
