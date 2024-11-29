// pages/legal/index.tsx
import Head from 'next/head'
import Link from 'next/link'

import styles from '@/styles/Legal.module.css'

export default function LegalPage() {
  const legalInfo = [
    {
      title: '販売事業者',
      content: '進 拓海'
    },
    {
      title: '運営統括責任者',
      content: '進 拓海'
    },
    {
      title: '所在地',
      content: '〒861-8064\n熊本市北区八景水谷2-2-5 シティライフ八景水谷'
    },
    {
      title: '電話番号',
      content: '096-7536-5016'
    },
    {
      title: 'メールアドレス',
      content: 'shincodeinc@gmail.com'
    },
    {
      title: '商品の販売価格',
      content: 'スタンダートプラン：6,980円（税込）'
    },
    {
      title: '商品代金以外の必要料金',
      content: '消費税：商品価格に含む\n決済手数料：無料'
    },
    {
      title: 'お支払い方法',
      content: 'クレジットカード決済（Stripe）'
    },
    {
      title: '商品の引き渡し時期',
      content:
        '決済完了後、即時にNotionテンプレートの複製用リンクをメールにて送付'
    },
    {
      title: '返品・交換・キャンセル等',
      content: '返金要請があれば、全額返金可能(2~3営業日以内に返金)'
    },
    {
      title: '販売数量',
      content: '1テンプレートにつき1ライセンス'
    },
    {
      title: '商品の提供時期',
      content: '決済完了後2~3日営業日以内）'
    },
    {
      title: '動作環境',
      content: 'Notionアカウントが必要です\nインターネット接続環境が必要です'
    },
    {
      title: '利用制限',
      content: '個人利用限定'
    }
  ]

  return (
    <>
      <Head>
        <title>特定商取引法に基づく表記 - ShinCode</title>
        <meta
          name='description'
          content='ShinCodeが提供するNotionブログテンプレートの特定商取引法に基づく表記ページです。'
        />
        <meta name='robots' content='noindex' />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>特定商取引法に基づく表記</h1>
        <div className={styles.content}>
          {legalInfo.map((item, index) => (
            <section key={index} className={styles.section}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </section>
          ))}
        </div>
        <div className={styles.footer}>
          <Link
            href='/next-notion-template-order-page'
            className={styles.backLink}
          >
            販売ページに戻る
          </Link>
          <Link
            href='/'
            className={styles.backLink}
            style={{ marginLeft: '1rem' }}
          >
            トップページへ
          </Link>
        </div>
      </div>
    </>
  )
}
