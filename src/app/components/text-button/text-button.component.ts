import { NgClass } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Before is used to diaply the shadow
// After is used to display 25% white on the button when hovered

const buttonStyles = cva(
  [
    'overflow-hidden',
    'relative',
    `after:content-[' ']`,
    'after:absolute',
    'after:inset-0',
    'after:bg-white/0',
    'hover:after:bg-white/25',
    `before:conetnt-[' ']`,
    'before:absolute',
    'before:inset-0',
    'before:z-[1]',
  ],
  {
    variants: {
      color: {
        blue: ['text-white', 'bg-blue', 'before:shadow-button-blue'],
        pink: ['text-white', 'bg-button-pink', 'before:shadow-button-pink'],
      },
      size: {
        sm: [
          'heading-s',
          'py-3',
          'px-8',
          'rounded-[40px]',
          'before:rounded-[40px]',
        ],
        lg: [
          'w-full',
          'heading-m',
          'lgmd:rounded-[40px]',
          'lgmd:before:rounded-[40px]',
          'sm:rounded-[20px]',
          'sm:before:rounded-[20px]',
          'lg:min-w-[250px]',
          'lg:p-[66px]',
          'md:min-w-[200px]',
          'md:p-[62px]',
          'sm:p-6',
        ],
      },
    },

    defaultVariants: {
      color: 'blue',
      size: 'sm',
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

@Component({
  selector: 'text-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './text-button.component.html',
  styleUrl: './text-button.component.scss',
})
export class TextButtonComponent {
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
