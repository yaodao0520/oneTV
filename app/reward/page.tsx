'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/ui/Icon';

export default function RewardPage() {
    const [selectedMethod, setSelectedMethod] = useState<'wechat' | 'alipay'>('wechat');

    const rewardMethods = [
        {
            id: 'wechat',
            name: '微信',
            image: 'https://5f4480c.webp.li/2025/04/83427cf17e1bf1874c5e391df35f1c9a.png',
            description: '使用微信扫码打赏'
        },
        {
            id: 'alipay',
            name: '支付宝',
            image: 'https://5f4480c.webp.li/2025/04/3046cde05fab442e147234ec503ea9ee.png',
            description: '使用支付宝扫码打赏'
        }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-color )] pt-24 pb-12">
            <div className="max-w-2xl mx-auto px-4">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[var(--text-color-secondary)] hover:text-[var(--text-color)] transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        返回首页
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <Icons.Heart size={48} className="text-red-500" />
                    </div>
                    <h1 className="text-4xl font-bold text-[var(--text-color)] mb-2">打赏作者</h1>
                    <p className="text-lg text-[var(--text-color-secondary)]">
                        感谢您对本项目的支持！您的打赏将激励我们继续改进和维护这个项目。
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                    {rewardMethods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => setSelectedMethod(method.id as 'wechat' | 'alipay')}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                                selectedMethod === method.id
                                    ? 'border-[var(--accent-color)] bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)]'
                                    : 'border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-[var(--accent-color)]'
                            }`}
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[var(--text-color)] mb-1">{method.name}</div>
                                <div className="text-sm text-[var(--text-color-secondary)]">{method.description}</div>
                            </div>
                        </button>
                    ))}
                </div>

                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-8 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="relative w-64 h-64 mb-6 bg-white rounded-lg p-4 shadow-lg">
                            <Image
                                src={rewardMethods.find(m => m.id === selectedMethod)?.image || ''}
                                alt={`${rewardMethods.find(m => m.id === selectedMethod)?.name || ''} 收款码`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-[var(--text-color)] font-semibold mb-2">
                                {rewardMethods.find(m => m.id === selectedMethod)?.name} 收款码
                            </p>
                            <p className="text-sm text-[var(--text-color-secondary)]">
                                请使用{rewardMethods.find(m => m.id === selectedMethod)?.name}扫描上方二维码进行打赏
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-[color-mix(in_srgb,var(--accent-color)_10%,transparent)] border border-[var(--accent-color)] rounded-lg p-6 text-center">
                    <p className="text-[var(--text-color)] mb-2">🙏 感谢您的支持！</p>
                    <p className="text-sm text-[var(--text-color-secondary)]">
                        您的每一份打赏都将帮助我们改进项目、修复 bug、添加新功能。
                    </p>
                </div>
            </div>
        </div>
    );
}
